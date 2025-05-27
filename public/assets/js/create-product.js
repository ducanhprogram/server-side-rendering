document.addEventListener("DOMContentLoaded", function () {
    // Initialize form validation
    initFormValidation("createProductForm");

    // Setup file upload
    setupFileUpload(
        "productImage",
        "productImagePreview",
        "productImageUpload"
    );

    // Handle adding specifications
    let specCount = 1;
    const specsList = document.getElementById("specificationsList");
    const addSpecBtn = document.getElementById("addSpecBtn");

    addSpecBtn.addEventListener("click", function () {
        specCount++;
        const newSpecRow = document.createElement("div");
        newSpecRow.className = "spec-row";
        newSpecRow.innerHTML = `
        <div class="form-group">
            <label for="specName${specCount}">Specification Name</label>
            <input type="text" id="specName${specCount}" class="form-control spec-name" placeholder="e.g. Weight">
        </div>
        
        <div class="form-group">
            <label for="specValue${specCount}">Specification Value</label>
            <input type="text" id="specValue${specCount}" class="form-control spec-value" placeholder="e.g. 2.5 kg">
        </div>
        
        <button type="button" class="remove-spec">
            <i class="fas fa-times"></i>
        </button>
    `;
        specsList.appendChild(newSpecRow);

        // Add event listener to the new remove button
        const removeBtn = newSpecRow.querySelector(".remove-spec");
        removeBtn.addEventListener("click", function () {
            specsList.removeChild(newSpecRow);
        });
    });

    // Initial spec row remove button
    document
        .querySelector(".remove-spec")
        .addEventListener("click", function () {
            const firstSpecRow = this.closest(".spec-row");
            // Don't remove if it's the last one, just clear the values
            if (specsList.children.length === 1) {
                firstSpecRow
                    .querySelectorAll("input")
                    .forEach((input) => (input.value = ""));
            } else {
                specsList.removeChild(firstSpecRow);
            }
        });

    // Numeric input validation (for price fields)
    const numericInputs = document.querySelectorAll(
        '[data-validate="numeric"]'
    );
    numericInputs.forEach((input) => {
        input.addEventListener("input", function (e) {
            // Allow only numbers and decimal point
            this.value = this.value.replace(/[^0-9.]/g, "");

            // Ensure only one decimal point
            const decimalCount = (this.value.match(/\./g) || []).length;
            if (decimalCount > 1) {
                this.value = this.value.replace(/\.(?=.*\.)/g, "");
            }
        });
    });

    // Handle Cancel Button
    document.getElementById("cancelBtn").addEventListener("click", function () {
        if (
            confirm(
                "Are you sure you want to cancel? All changes will be lost."
            )
        ) {
            window.location.href = "products.html";
        }
    });

    // Handle Save as Draft Button
    document
        .getElementById("saveAsDraftBtn")
        .addEventListener("click", function () {
            showMessage("successMessage", "Product saved as draft.", 3000);
        });

    // Handle form submission
    document
        .getElementById("createProductForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            if (validateForm("createProductForm")) {
                // Show success message
                showMessage(
                    "successMessage",
                    "Product has been created successfully.",
                    3000
                );

                // Redirect to products page after a delay
                setTimeout(function () {
                    window.location.href = "products.html";
                }, 2000);
            }
        });
});
