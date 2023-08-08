import { useState } from "react";

const Form = () => {
  const [teamList, setTeamList] = useState({
    isim: "",
    email: "",
    rol: "",
    hobi: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Oyuncu Kaydedildi. Hayırlı olsun :)", teamList);
  };

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setTeamList({ ...teamList, [name]: type === "checkbox" ? checked : value });
  };

  useState(() => {
    console.log("Oyuncu bilgileri güncellendi.", teamList);
  }, [teamList]);

  return (
    <form onSubmit={handleSubmit}>
      <label>Yeni Oyuncumuzun Bilgileri:</label>
      <hr />
      <label htmlFor="member-name">İsim:</label>
      <input
        id="member-name"
        type="text"
        name="isim"
        value={teamList.isim}
        onChange={handleInputChange}
        placeholder="Yıldızın adını giriniz..."
      />
      <br />
      <label htmlFor="member-mail">Email:</label>
      <input
        id="member-mail"
        type="email"
        name="email"
        value={teamList.email}
        onChange={handleInputChange}
        placeholder="Yıldızın emailini giriniz..."
      />
      <br />
      <label htmlFor="member-rol">Rolü</label>
      <input
        id="member-rol"
        type="text"
        name="rol"
        value={teamList.rol}
        onChange={handleInputChange}
        placeholder="Alacağı görev... "
      />
      <br />
      <label htmlFor="member-hobi">Hobileri</label>
      <input
        id="member-hobi"
        type="text"
        name="hobi"
        value={teamList.hobi}
        onChange={handleInputChange}
        placeholder="Hobileri nelerdir?... "
      />
      <br />
      <button type="submit">Oyuncuyu Kaydet</button>
      <br />
      <button
        type="button"
        onClick={() => {
          setTeamList({ isim: "", email: "", rol: "", hobi: "" });
        }}
      >
        Bilgileri Temizle
      </button>
    </form>
  );
};

export default Form;
