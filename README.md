# CyberPeace Digital Citizenship Pledge

[cloudflarebutton]

A visually stunning, minimalist, and mobile-responsive single-page web application designed for users to take the 'CyberPeace Digital Citizenship Pledge'. The application features a clean layout presenting the pledge text, followed by a simple and elegant form to capture the user's full name, email, and mobile number. Upon successful submission, the application will dynamically generate a personalized PDF certificate with the user's name embedded and initiate an automatic download. Simultaneously, it will redirect the user to an external registration page in a new browser tab. The entire experience is designed to be seamless, professional, and trustworthy, running entirely on the client-side for maximum speed and scalability on Cloudflare's edge network.

## Key Features

- **Digital Pledge:** A clear and concise presentation of the CyberPeace Digital Citizenship Pledge.
- **Personalized Certificate:** Dynamically generates a PDF certificate with the user's name upon completion.
- **Instant Download:** The certificate is automatically downloaded to the user's device.
- **Seamless Redirection:** Redirects users to the official registration page in a new tab.
- **Client-Side Logic:** All operations, including PDF generation, are handled in the browser for privacy and speed. No user data is stored.
- **Responsive Design:** Flawless user experience across desktops, tablets, and mobile devices.
- **Modern UI:** Built with a focus on visual excellence and a clean, professional aesthetic.

## Technology Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Form Management:** React Hook Form
- **Schema Validation:** Zod
- **PDF Generation:** jsPDF, html2canvas
- **Deployment:** Cloudflare Pages & Workers

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/cyberpeace-pledge.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd cyberpeace-pledge
    ```
3.  **Install dependencies:**
    ```sh
    bun install
    ```

## Development

To start the local development server, run the following command:

```sh
bun run dev
```

The application will be available at `http://localhost:3000`. The server will automatically reload when you make changes to the code.

## Building for Production

To create a production-ready build of the application, run:

```sh
bun run build
```

This command bundles the application into the `dist` directory, optimized for deployment.

## Deployment

This project is configured for seamless deployment to the Cloudflare network.

1.  **Log in to Cloudflare:**
    If you haven't already, log in to your Cloudflare account using the Wrangler CLI.
    ```sh
    wrangler login
    ```
2.  **Deploy the application:**
    Run the deploy script, which will build the project and deploy it to Cloudflare Pages.
    ```sh
    bun run deploy
    ```

Alternatively, you can deploy directly from your GitHub repository using the button below.

[cloudflarebutton]

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.