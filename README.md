# ObsLeadEngine API Connector

## Overview
The ObsLeadEngine API Connector is a component within Obsidione's lead generation infrastructure, which serves as a bridge between the customer information collection webform and our backend software, ensuring that all submitted data is accurately distributed to the relevant companies.

Our LeadEngine API Connector is designed to seamlessly integrate with webforms and platforms that collect customer information, such as contact details, preferences, and any other relevant data points (the LEAD) which is distributed and submitted to the relevant parties. Once the information is submitted by the user and validated by the endpoint, the API connector takes over to ensure this data is properly captured and transmitted.

One of the primary functions of the API connector is to validate the submitted information. This includes checking for common errors, ensuring data completeness, and verifying that the information adheres to predefined formats. This validation process helps to maintain data integrity and reduces the likelihood of errors in subsequent processing stages.

Beyond just validating the data, the LeadEngine API Connector adds significant value by enhancing the submitted information. It does this by cross-referencing public databases and other resources to append additional relevant details. This could include enriching customer profiles with demographic data, geographic location, or even business information where applicable.

## How to Use
To utilize our API Connector, your integration will require a unique API key provided by the partner team at Obsidione. This key is unique and essential for authenticating requests and ensuring secure communication between your webform and our backend systems. Please contact us to obtain your unique API key.

We recommend sending the information via Axios to ensure the best compatibility with our systems. Please check the example below to find a super-simple example of how to use Axios with the POST method.

```
import axios from 'axios';

const sendLeadData = async (formData) => {
    try {
        const response = await axios.post('https://api.obsleads.com/leadengine/submitNewLead?reference=externalLeadSubmission', formData, {
            headers: {
                'Authorization': `Bearer YOUR_UNIQUE_API_KEY`,
                'LeadEngineKey': `Bearer YOUR_UNIQUE_CUSTOMER_NO´,
                'CurrentTimestamp': `CURRENT_TIMESTAMP`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200 && response.data.received === true) {
            console.log('Lead data submitted successfully: ', response.data);
        } else {
            console.error('Error submitting lead data: ', response.status, response.message);
        }
    } catch (error) {
        console.error('An error occurred while submitting lead data: ', error.message);
    }
};

// Example usage:
const formData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    company: 'Example Corp'
};

const handleFormSubmission = (formName, formEmail, formPhone, formCompany, formCurrentSupplier, ...restOfInformation) => {

  const formData = {
      name: formName, //John Doe
      email: formEmail, //john.doe@example.com
      phone: formPhone, //123-456-7890
      company: formCompany, //Example Corp
      currentSupplier: formCurrentSupplier, //Contoso Inc
      additionalInformation: "Requesting a single use software for three mailboxes and a contact centre for a SMB consisting of 10 users", //additional information
      ...restOfInformation
  };

  // validate form information submitted to ensure minimal API errors returned

  sendLeadData(formData);
}

```

## Contact us
This is just an example and has to be modified into your existing systems. If you have any questions for the implementation or submission processes for external leads, please contact us through partners@obsidione.com or the partner team directly by phone +47 23 96 41 03 (Mon-Fri 10-20).
Please press the selections for tech support (key 5) and then "API & connections" (key 3).

&copy; 2024 Obsidione Norway AS<br />
Leading the way there<br/><br />
