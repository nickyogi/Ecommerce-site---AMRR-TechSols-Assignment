# 🛍️ React + Vite eCommerce Platform

A feature-rich, fully responsive **eCommerce web application** built with **React** and **Vite**. This project serves as a modern storefront where users can **view**, **add**, **edit**, **delete**, and **enquire** about products. It includes essential features such as **image uploads**, **product filtering by category**, and **email-based enquiries**, making it ideal for small to medium-sized online retail businesses.

<h2 id="overview">Overview</h2>
<p>This is a responsive and visually engaging eCommerce Platform, recreated using modern front-end technologies. It replicates the clean aesthetic, creative layout.
<img src="/PreviewImages/ProjectPreview-1.PNG" alt="eCommerce Website Preview">
<img src="/PreviewImages/ProjectPreview-2.PNG" alt="eCommerce Website Preview"></p>
<h2 id="demo">Demo</h2>
<p>Explore the live demo of website : <a href="https://ecommerce-site-amrr-tech-sols-assig.vercel.app/view-items">Live Demo</a></p>
---

## 🔥 Key Features

### 🧾 Product Management

- **Fetch Products via API**: Automatically pulls product data from a default Products API on initial load.
- **Create New Products**: Add new items with:
  - Product name
  - Description
  - Price
  - Category
  - One or more images
- **Edit Products**: Update existing product details or replace images.
- **Delete Products**: Remove products permanently from the listing.

### 🖼️ Image Support

- Add multiple images per product.
- Image preview functionality during creation and editing.

### 📂 Category Filter

- Filter displayed products based on selected categories.
- Dynamic UI updates without reloading the page.

### ✉️ Enquiry System

- Click **Enquire** on any product to open a modal or page with a contact form.
- Automatically includes the **product ID**.
- Users can write a custom message.
- Sends an email to the **store owner** with:
  - Product ID
  - User's message

### 🖥️ Responsive UI

- Fully responsive layout.
- Seamless experience across desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

| Tech                  | Description                 |
| --------------------- | --------------------------- |
| **React**             | Frontend UI library         |
| **Vite**              | Fast dev server & bundler   |
| **React Router**      | Client-side routing         |
| **EmailJS**           | Email sending functionality |
| **Axios / Fetch API** | Data fetching from backend  |
| **CSS / Tailwind**    | Styling & layout            |
| **React Hooks**       | State and effect management |

---

## 🚀 Getting Started

Follow these steps to get the app up and running locally.

### 1. Clone the Repository

git clone https://github.com/your-username/react-ecommerce-app.git
cd react-ecommerce-app

### 2. Install Dependencies

bash
Copy
Edit
npm install

### 3. Start the Development Server

npm run dev
App will be available at http://localhost:5173

## 🔧 Usage Instructions

### ➕ Add a Product

Navigate to the "Add Product" page.

Enter the product name, description, price, and category.

Upload one or more images.

Click Submit to save.

### ✏️ Edit or 🗑️ Delete

On each product card or detail view, you'll see Edit and Delete options.

Make changes or remove items as needed.

### 🔍 Filter by Category

Use the category selection dropdown or buttons on the homepage to filter products.

### 📩 Enquire About a Product

Click Enquire on any product.

A form will open with the product ID pre-filled.

Write your message and submit.

An email will be sent to the owner's inbox.

### 📃 License

This project is licensed under the MIT License.
Feel free to use, modify, and distribute as needed.

### 🙋‍♂️ Author

Your Name
Your GitHub
Your LinkedIn

### 💡 Future Enhancements

🛒 Add shopping cart & checkout flow

🔒 User authentication & admin dashboard

📊 Analytics and reporting

🌍 Multi-language support
