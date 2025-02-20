
# Content Summarizing Extension

A Chrome extension that extracts selected text from a webpage, sends it to a Spring Boot backend, and retrieves a summarized version using the Gemini API.


## Features

- Summarizes selected text from any webpage
- Uses Gemini API for high-quality text summarization
- Seamless integration between Chrome Extension and Spring Boot backend
- Fast and efficient processing with WebClient



## Tech Stack

**Backend:** Spring Boot, WebClient, Gemini API

**Frontend:** HTML, CSS, JavaScript (Chrome Extension)


## How It Works

- User selects text on a webpage.
- The extension sends the text to the Spring Boot backend.
- The backend forwards the text to the Gemini API.
- The summarized response is sent back to the extension and displayed.


## Installation

### Backend (Spring Boot)

Clone the repository:

```bash
  git clone https://github.com/hprasath2306/Spring-AI-Chrome-Extension
  cd Spring-AI-Chrome-Extension
```

Configure your application.properties:

```bash
  gemini.api.url = your_api_url_here
  gemini.api.key = your_api_key_here
```

Run the backend:

```bash
  mvn spring-boot:run
```

### Chrome Extension

- Navigate to chrome://extensions/ in your browser.
- Enable "Developer mode" (toggle in the top-right corner).

- Click "Load unpacked" and select the extension folder from the repo.
- The extension is now installed and ready to use!

## Demo
![image](https://github.com/user-attachments/assets/6c6fa4fc-f74f-4112-88a9-352b4582ab31)
![image](https://github.com/user-attachments/assets/bdbf87d6-48e5-47fa-9e68-034f1c67b3e2)


