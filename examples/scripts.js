const sendLeadData = async (formData) => {
    try {
        const response = await fetch('https://api.obsleads.com/leadengine/submitNewLead?reference=externalLeadSubmission', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer YOUR_UNIQUE_API_KEY`,
                'LeadEngineKey': `Bearer YOUR_UNIQUE_CUSTOMER_NO`,
                'CurrentTimestamp': new Date().toISOString(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const responseData = await response.json();

        if (response.status === 200 && responseData.received === true) {
            Toastify({
                text: "Lead data submitted successfully!",
                backgroundColor: "#28a745",
                className: "toast-success"
            }).showToast();
            console.log('Lead data submitted successfully:', responseData);
        } else {
            Toastify({
                text: `Error submitting lead data: ${responseData.message}`,
                backgroundColor: "#dc3545",
                className: "toast-error"
            }).showToast();
            console.error('Error submitting lead data:', response.status, responseData.message);
        }
    } catch (error) {
        Toastify({
            text: `An error occurred: ${error.message}`,
            backgroundColor: "#dc3545",
            className: "toast-error"
        }).showToast();
        console.error('An error occurred while submitting lead data:', error.message);
    } finally {
        document.getElementById('loadingSpinner').style.display = 'none';
        document.getElementById('submitButtonText').textContent = 'Submit';
    }
};

document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (this.checkValidity() === false) {
        event.stopPropagation();
        this.classList.add('was-validated');
        return;
    }

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        currentSupplier: document.getElementById('currentSupplier').value,
        additionalInformation: document.getElementById('additionalInformation').value
    };

    document.getElementById('loadingSpinner').style.display = 'inline-block';
    document.getElementById('submitButtonText').textContent = 'Submitting...';

    sendLeadData(formData);
});
