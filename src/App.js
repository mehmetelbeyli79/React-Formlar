import { useState } from "react";
import "./styles.css";

export default function App() {
  const [form, setForm] = useState({ isim: "", sehir: "", bio: "" });
  console.log(form);
  const HandleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });
  return (
    <div className="App">
      <h1>REACT Form Konusu</h1>
      <form>
        <input
          onChange={HandleChange}
          value={form.isim}
          type="text"
          placeholder="İsminizi Giriniz"
          name="isim"
        />
        <select onChange={HandleChange} value={form.sehir} name="sehir">
          <option value="">Şehir Seçiniz</option>
          <option value="ankara">Ankara</option>
          <option value="istanbul">İstanbul</option>
          <option value="izmir">İzmir</option>
        </select>
        <textarea
          onChange={HandleChange}
          value={form.bio}
          rows="10"
          name="bio"
        ></textarea>
        <button>Gönder</button>
      </form>
    </div>
  );
}
