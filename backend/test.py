import requests

# Specify the URL of your Node.js API
api_url = 'http://localhost:2711/api/v1/hazard/general'

# Example data: hazard type
payload = {'hazardType': 'fire'}

# Make a POST request to the API
response = requests.post(api_url, json=payload)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    data = response.json()
    print("Precautions:", data['precautions'])
    print("Guidelines:", data['guidelines'])
    print("Safety Measures:", data['safetyMeasures'])
else:
    print("Error:", response.status_code, response.text)
