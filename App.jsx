import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    // 1. Name 
    if (!form.name) newErrors.name = "Name is required";

    // 2. Email 
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Email must be lowercase, numbers, and dot only";
    }

    // 3. Address 
    if (!form.address) newErrors.address = "Address is required";

    // 4. Phone 
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    // 5. Password 
    const passRegex = /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{6,}$/;
    if (!passRegex.test(form.password)) {
      newErrors.password =
        "Password must have 1 uppercase, 1 number, no symbols";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully!");
      setForm({
        name: "",
        email: "",
        address: "",
        phone: "",
        password: ""
      });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Custom Form</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "300px", gap: "10px" }}
      >
        {/* NAME - BOLD */}
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={{ fontWeight: "bold" }}
        />
        <span style={{ color: "red" }}>{errors.name}</span>

        {/* EMAIL */}
        <input
          name="email"
          placeholder="Email (lowercase only)"
          value={form.email}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}>{errors.email}</span>

        {/* ADDRESS - RED */}
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          style={{ color: "red" }}
        />
        <span style={{ color: "red" }}>{errors.address}</span>

        {/* PHONE - UNDERLINE */}
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          style={{ textDecoration: "underline" }}
        />
        <span style={{ color: "red" }}>{errors.phone}</span>

        {/* PASSWORD */}
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}>{errors.password}</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;