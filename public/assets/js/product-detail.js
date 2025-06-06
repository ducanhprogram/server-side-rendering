document.addEventListener("DOMContentLoaded", function () {
    // Get user ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");

    // Set edit button URL
    const editButton = document.getElementById("editButton");
    editButton.href = `edit-user.html?id=${userId}`;

    // Load user details
    loadUserDetails(userId);

    // Load activity history
    loadActivityHistory(userId);
});

// Load user details
function loadUserDetails(userId) {
    // In a real application, this would fetch data from an API
    // For demonstration, we'll use mock data

    // Mock user data
    const userData = {
        id: userId,
        name: "John Doe",
        username: "johndoe",
        email: "john.doe@example.com",
        role: "Administrator",
        status: "Active",
        lastLogin: "Today, 09:45 AM",
        dateCreated: "2023-05-15",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, City, Country",
    };

    // Update page title and header
    document.title = `User: ${userData.name} | Admin Dashboard`;
    document.getElementById("itemTitle").textContent = userData.name;

    // Create user detail HTML
    const userHTML = `
        <div class="detail-header" style="display: flex; align-items: center; margin-bottom: 20px;">
            <div class="avatar" style="width: 64px; height: 64px; font-size: 24px;">
                ${userData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
            </div>
            <div style="margin-left: 20px;">
                <h2 style="margin: 0;">${userData.name}</h2>
                <p style="margin: 5px 0; color: #666;">@${userData.username}</p>
                <span class="badge badge-success">${userData.status}</span>
                <span class="badge" style="background-color: rgba(58, 134, 255, 0.1); color: #3a86ff;">${
                    userData.role
                }</span>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>Contact Information</h3>
            <table class="detail-table">
                <tr>
                    <td><strong>Email:</strong></td>
                    <td>${userData.email}</td>
                </tr>
                <tr>
                    <td><strong>Phone:</strong></td>
                    <td>${userData.phone}</td>
                </tr>
                <tr>
                    <td><strong>Address:</strong></td>
                    <td>${userData.address}</td>
                </tr>
            </table>
        </div>
        
        <div class="detail-section">
            <h3>Account Information</h3>
            <table class="detail-table">
                <tr>
                    <td><strong>Username:</strong></td>
                    <td>${userData.username}</td>
                </tr>
                <tr>
                    <td><strong>Role:</strong></td>
                    <td>${userData.role}</td>
                </tr>
                <tr>
                    <td><strong>Status:</strong></td>
                    <td>${userData.status}</td>
                </tr>
                <tr>
                    <td><strong>Date Created:</strong></td>
                    <td>${formatDate(userData.dateCreated)}</td>
                </tr>
                <tr>
                    <td><strong>Last Login:</strong></td>
                    <td>${userData.lastLogin}</td>
                </tr>
            </table>
        </div>
    `;

    document.getElementById("itemContent").innerHTML = userHTML;
}

// Load activity history
function loadActivityHistory(userId) {
    // In a real application, this would fetch data from an API
    // For demonstration, we'll use mock data

    const activityData = [
        {
            action: "Account Created",
            date: "2023-05-15 14:30",
            user: "Admin",
        },
        {
            action: "Profile Updated",
            date: "2023-06-20 10:15",
            user: "John Doe",
        },
        {
            action: "Role changed to Administrator",
            date: "2023-06-25 09:45",
            user: "Admin",
        },
        {
            action: "Last Login",
            date: "2023-07-18 09:45",
            user: "John Doe",
        },
    ];

    // Generate HTML for activity list
    const activityHTML = activityData
        .map(
            (activity) => `
        <li style="padding: 15px 0; border-bottom: 1px solid #eee;">
            <div style="display: flex; justify-content: space-between;">
                <div>
                    <i class="fas fa-history" style="color: #3a86ff; margin-right: 10px;"></i>
                    <strong>${activity.action}</strong> by ${activity.user}
                </div>
                <div style="color: #666;">
                    ${formatDate(activity.date, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </div>
            </div>
        </li>
    `
        )
        .join("");

    document.getElementById("activityList").innerHTML = activityHTML;
}
