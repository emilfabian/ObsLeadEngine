# ObsLeadEngine API Connector

## Overview
The ObsLeadEngine API Connector is a component within Obsidione's lead generation infrastructure, which serves as a bridge between the customer information collection webform and our backend software, ensuring that all submitted data is accurately distributed to the relevant companies.

Our LeadEngine API Connector is designed to seamlessly integrate with webforms and platforms that collect customer information, such as contact details, preferences, and any other relevant data points (the LEAD) which is distributed and submitted to the relevant parties. Once the information is submitted by the user and validated by the endpoint, the API connector takes over to ensure this data is properly captured and transmitted.

One of the primary functions of the API connector is to validate the submitted information. This includes checking for common errors, ensuring data completeness, and verifying that the information adheres to predefined formats. This validation process helps to maintain data integrity and reduces the likelihood of errors in subsequent processing stages. Beyond just validating the data, the LeadEngine API Connector adds significant value by enhancing the submitted information. It does this by cross-referencing public databases and other resources to append additional relevant details. This could include enriching customer profiles with demographic data, geographic location, or even business information where applicable.

## How to Use
To utilize our API Connector, your integration will require a unique API key provided by the partner team at Obsidione. This key is unique and essential for authenticating requests and ensuring secure communication between your webform and our backend systems. Please contact us to obtain your unique API key.

We recommend sending the information via Axios to ensure the best compatibility with our systems. Please check index.js to find an example of how to use Axios with the POST method.

## Contact us
If you have any questions, please contact us through partners@obsidione.com or the partner team directly by phone +47 23 96 41 03 (Mon-Fri 10-20).
Please press the selections for tech support and then "API & connections".

Leading the way there
&copy; 2024 Obsidione Norway AS
