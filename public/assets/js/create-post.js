document.addEventListener("DOMContentLoaded", function () {
    // Initialize form validation
    initFormValidation("createPostForm");

    // Setup file upload
    setupFileUpload(
        "postFeaturedImage",
        "postFeaturedImagePreview",
        "postFeaturedImageUpload"
    );

    // Auto-generate slug from title
    document.getElementById("postTitle").addEventListener("blur", function () {
        const slugInput = document.getElementById("postSlug");
        // Only auto-generate if slug is empty
        if (!slugInput.value.trim()) {
            // Convert title to slug
            const slug = this.value
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9\s]/g, "") // Remove special chars
                .replace(/\s+/g, "-"); // Replace spaces with hyphens

            slugInput.value = slug;
        }
    });

    // Show/hide scheduled date based on status selection
    document
        .getElementById("postStatus")
        .addEventListener("change", function () {
            const scheduledDateContainer = document.getElementById(
                "scheduledDateContainer"
            );
            if (this.value === "scheduled") {
                scheduledDateContainer.style.display = "block";
                document.getElementById("postScheduledDate").required = true;
            } else {
                scheduledDateContainer.style.display = "none";
                document.getElementById("postScheduledDate").required = false;
            }
        });

    // Handle form submission
    document
        .getElementById("createPostForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            if (validateForm("createPostForm")) {
                // If status is scheduled, validate the schedule date
                const status = document.getElementById("postStatus").value;
                if (status === "scheduled") {
                    const scheduledDate =
                        document.getElementById("postScheduledDate").value;
                    if (!scheduledDate) {
                        showError(
                            document.getElementById("postScheduledDate"),
                            "Please select a scheduled date."
                        );
                        return;
                    }
                }

                // Create post (in a real application, this would be an API call)
                console.log("Creating new post...");

                // Generate form data for logging (in a real app, this would be sent to the server)
                const formData = {
                    title: document.getElementById("postTitle").value,
                    slug: document.getElementById("postSlug").value,
                    excerpt: document.getElementById("postExcerpt").value,
                    content: document.getElementById("postContent").value,
                    topic: document.getElementById("postTopic").value,
                    status: document.getElementById("postStatus").value,
                    tags: document.getElementById("postTags").value,
                    author: document.getElementById("postAuthor").value,
                    scheduledDate:
                        document.getElementById("postScheduledDate").value ||
                        null,
                    metaTitle: document.getElementById("postMetaTitle").value,
                    metaDescription: document.getElementById(
                        "postMetaDescription"
                    ).value,
                    allowComments:
                        document.getElementById("allowComments").checked,
                    featuredPost:
                        document.getElementById("featuredPost").checked,
                    notifySubscribers:
                        document.getElementById("notifySubscribers").checked,
                };

                console.log("Form data:", formData);

                // Show success message
                showMessage(
                    "successMessage",
                    "Post has been created successfully.",
                    3000
                );

                // Redirect after a delay
                setTimeout(() => {
                    window.location.href = "posts.html";
                }, 2000);
            }
        });

    // Handle cancel button
    document.getElementById("cancelBtn").addEventListener("click", function () {
        window.location.href = "posts.html";
    });
});
