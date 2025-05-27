document.addEventListener("DOMContentLoaded", function () {
    // Initialize form validation
    initFormValidation("productForm");

    // Setup file upload
    setupFileUpload(
        "productImage",
        "productImagePreview",
        "productImageUpload"
    );

    // Handle form submission
    document
        .getElementById("productForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            if (validateForm("productForm")) {
                // Show success message
                showMessage(
                    "successMessage",
                    "Product has been updated successfully.",
                    3000
                );

                // Redirect after a delay - would typically include the ID from the URL
                setTimeout(() => {
                    window.location.href = "product-detail.html?id=1";
                }, 2000);
            }
        });

    // Handle cancel button
    document.getElementById("cancelBtn").addEventListener("click", function () {
        window.location.href = "product-detail.html?id=1";
    });
});
