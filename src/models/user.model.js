//tầng dữ liệu :
// Dữ liệu di chuyển qua các tầng như sau:

// Client → Router → Controller → Service → Model → Database
// Kết quả trả về theo chiều ngược lại: Database → Model → Service → Controller → Client.
const db = require("@/configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("@/utils/queryBuilder");

exports.findAll = async (page, limit) => {
    const offset = (page - 1) * limit;
    const [users] = await db.query(
        `select id,name,first_name,last_name, email, birthday, bio,intro, avatar, gender, updated_at from users order by created_at desc limit ? offset ?`,
        [+limit, +offset]
    );
    return users;
};

exports.count = async () => {
    const [[{ total }]] = await db.query(`select count(*) as total from users`);
    return total;
};

exports.findById = async (id) => {
    const [results] = await db.query(
        `select * from users where id = ? or username = ?`,
        [id, id]
    );
    return results[0];
};

exports.create = async (data) => {
    const { columns, placeholders, values } = buildInsertQuery(data);

    const query = `INSERT INTO users (${columns}) VALUES (${placeholders});`;
    const [{ insertId }] = await db.query(query, values);

    return {
        id: insertId,
        ...data,
    };
};

exports.update = async (id, data) => {
    const { setClause, values } = buildUpdateQuery(data);

    values.push(id);

    const query = `UPDATE users SET ${setClause} WHERE id = ?;`;
    await db.query(query, values);

    return {
        id,
        ...data,
    };
};

exports.remove = async (id) => {
    const [results] = await db.query(`delete from users where id = ?`, [id]);
    // của results trả về. affectedRows được trả về bởi thư viện mysql2. Sau khi thực hiện câu lệnh SQL như insert, update, delete. Nó cho biết số lượng bản ghi  trong cơ sở dữ liệu bị ảnh hưởng.
    const affectedRows = results.affectedRows;
    return affectedRows > 0;
};
