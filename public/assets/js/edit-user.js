document.addEventListener("DOMContentLoaded", function () {
    // Get user ID from URL path (not query string)
    const pathParts = window.location.pathname.split("/");
    const userId = pathParts[pathParts.length - 2]; // Get ID from /admin/users/:id/edit

    if (!userId || userId === "edit") {
        // Redirect to users page if no ID is provided
        window.location.href = "/admin/users";
        return;
    }

    // Initialize form validation
    initFormValidation("editUserForm");

    // Load user data
    loadUserData(userId);

    // Handle form submission
    document
        .getElementById("editUserForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            if (validateForm("editUserForm")) {
                // Check if password and confirm password match (if provided)
                const password = document.getElementById("userPassword").value;
                const confirmPassword = document.getElementById(
                    "userConfirmPassword"
                ).value;

                if (password && password !== confirmPassword) {
                    showError(
                        document.getElementById("userConfirmPassword"),
                        "Passwords do not match."
                    );
                    return;
                }

                // Update user (in a real application, this would be an API call)
                console.log("Updating user...");

                // Generate form data for logging
                const formData = {
                    id: userId,
                    name: document.getElementById("userName").value,
                    username: document.getElementById("userUsername").value,
                    email: document.getElementById("userEmail").value,
                    phone: document.getElementById("userPhone").value,
                    address: document.getElementById("userAddress").value,
                    role: document.getElementById("userRole").value,
                    status: document.getElementById("userStatus").value,
                    password: password || "unchanged",
                    sendEmail:
                        document.getElementById("emailNotifications").checked,
                    notifyAdmin:
                        document.getElementById("adminNotifications").checked,
                };

                console.log("Form data:", formData);

                // Show success message
                showMessage(
                    "successMessage",
                    "User has been updated successfully.",
                    3000
                );

                // Redirect after a delay to user detail page
                setTimeout(() => {
                    window.location.href = "/admin/users/" + userId;
                }, 2000);
            }
        });

    // Handle cancel button
    document.getElementById("cancelBtn").addEventListener("click", function () {
        window.location.href = "/admin/users/" + userId;
    });

    // Handle delete button
    document
        .getElementById("deleteUserBtn")
        .addEventListener("click", async function (e) {
            e.preventDefault();

            // Get user name from field
            const userName = document.getElementById("userName").value;

            // Set the name in the modal
            document.getElementById("deleteUserName").textContent = userName;

            // Show modal
            const result = await showConfirmDialog("confirmDeleteModal");

            if (result) {
                // In a real app, this would make an API call to delete the user
                console.log("Deleting user with ID:", userId);

                // Redirect to users list
                window.location.href = "/admin/users";
            }
        });

    // Custom validation for password confirmation
    document
        .getElementById("userConfirmPassword")
        .addEventListener("blur", function () {
            const password = document.getElementById("userPassword").value;
            const confirmPassword = this.value;

            if (password && password !== confirmPassword) {
                showError(this, "Passwords do not match.");
            }
        });
});

// Load user data for editing
function loadUserData(userId) {
    // In a real application, this would be an API call
    // For demonstration, we'll use mock data
    const userData = {
        id: userId,
        name: "John Doe",
        username: "johndoe",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, City, Country",
        role: "admin",
        status: "active",
        dateCreated: "2023-05-15",
        lastLogin: "Today, 09:45 AM",
        emailNotifications: true,
        adminNotifications: false,
    };

    // Set document title
    document.title = `Edit User: ${userData.name} | Admin Dashboard`;

    // Fill form fields with user data
    document.getElementById("userName").value = userData.name;
    document.getElementById("userEmail").value = userData.email;
    document.getElementById("userPhone").value = userData.phone;
    document.getElementById("userAddress").value = userData.address;
    document.getElementById("userUsername").value = userData.username;
    document.getElementById("userRole").value = userData.role;
    document.getElementById("userStatus").value = userData.status;
    document.getElementById("dateCreated").value = formatDate(
        userData.dateCreated
    );
    document.getElementById("lastLogin").value = userData.lastLogin;
    document.getElementById("emailNotifications").checked =
        userData.emailNotifications;
    document.getElementById("adminNotifications").checked =
        userData.adminNotifications;
}

// Format date helper
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
