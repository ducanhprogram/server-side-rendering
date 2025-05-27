document.addEventListener("DOMContentLoaded", function () {
    // Get post ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    // Set edit button URL
    const editButton = document.getElementById("editButton");
    editButton.href = `edit-post.html?id=${postId}`;

    // Load post details
    loadPostDetails(postId);

    // Load activity history
    loadActivityHistory(postId);
});

// Load post details
function loadPostDetails(postId) {
    // In a real application, this would fetch data from an API
    // For demonstration, we'll use mock data

    // Mock post data
    const postData = {
        id: postId,
        title: "10 Tips for Better Productivity",
        slug: "10-tips-for-better-productivity",
        author: "John Doe",
        topic: "Productivity",
        status: "Published",
        publishDate: "2023-07-15",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        excerpt:
            "Discover the top 10 habits that can dramatically improve your daily productivity and help you achieve more in less time.",
        featuredImage: "https://via.placeholder.com/800x400",
        tags: ["productivity", "work", "time-management"],
        comments: 15,
        views: 1250,
    };

    // Update page title and header
    document.title = `Post: ${postData.title} | Admin Dashboard`;
    document.getElementById("itemTitle").textContent = postData.title;

    // Create post detail HTML
    const postHTML = `
                    <div class="detail-header" style="margin-bottom: 20px;">
                        <img src="${postData.featuredImage}" alt="${
        postData.title
    }" style="width: 100%; border-radius: 8px; margin-bottom: 20px;">
                        <div>
                            <h2 style="margin: 0;">${postData.title}</h2>
                            <p style="margin: 5px 0; color: #666;">Slug: ${
                                postData.slug
                            }</p>
                            <div style="margin: 15px 0;">
                                <span class="badge badge-success">${
                                    postData.status
                                }</span>
                                <span class="badge" style="background-color: rgba(58, 134, 255, 0.1); color: #3a86ff;">${
                                    postData.topic
                                }</span>
                            </div>
                            <p><strong>Author:</strong> ${postData.author}</p>
                            <p><strong>Published:</strong> ${formatDate(
                                postData.publishDate
                            )}</p>
                            <p><strong>Stats:</strong> ${
                                postData.comments
                            } comments, ${postData.views} views</p>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Excerpt</h3>
                        <p><em>${postData.excerpt}</em></p>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Content</h3>
                        <div style="line-height: 1.6;">${postData.content}</div>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Tags</h3>
                        <div>
                            ${postData.tags
                                .map(
                                    (tag) => `
                                <span class="badge" style="background-color: #eee; color: #555; margin-right: 5px;">${tag}</span>
                            `
                                )
                                .join("")}
                        </div>
                    </div>
                `;

    document.getElementById("itemContent").innerHTML = postHTML;
}

// Load activity history
function loadActivityHistory(postId) {
    // In a real application, this would fetch data from an API
    // For demonstration, we'll use mock data

    const activityData = [
        {
            action: "Post Created",
            date: "2023-07-10 09:30",
            user: "John Doe",
        },
        {
            action: "Edited Content",
            date: "2023-07-12 11:45",
            user: "John Doe",
        },
        {
            action: "Published",
            date: "2023-07-15 08:30",
            user: "Admin",
        },
        {
            action: "Tags Updated",
            date: "2023-07-16 14:20",
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
                                <strong>${activity.action}</strong> by ${
                activity.user
            }
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
