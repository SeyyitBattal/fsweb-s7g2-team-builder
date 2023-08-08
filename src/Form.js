import { useState } from "react";

const Form = () => {
  const [teamList, setTeamList] = useState({
    isim: "",
    email: "",
    rol: "",
    hobiler: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Oyuncu Kaydedildi. Hayırlı olsun :)");
  };

  return (
    <form>
      <label>Yeni Oyuncumuzun Bilgileri:</label>
      <hr />
      <label htmlFor="member-name">İsim:</label>
      <input
        id="member-name"
        type="text"
        placeholder="Yıldızın adını giriniz..."
      />
      <br />
      <label htmlFor="member-mail">Email:</label>
      <input
        id="member-mail"
        type="email"
        placeholder="Yıldızın emailini giriniz..."
      />
      <br />
      <label htmlFor="member-rol">Rolü</label>
      <input id="member-rol" type="text" placeholder="Alacağı görev... " />
      <br />
      <label htmlFor="member-hobi">Hobileri:</label>
      <input
        id="member-hobi"
        type="text"
        placeholder="Hobileri nelerdir?... "
      />
      <br />
      <button type="submit">Oyuncuyu Kaydet</button>
      <br />
      <button
        type="button"
        onClick={() => {
          setTeamList({ isim: "", email: "", rol: "", hobiler: "" });
        }}
      >
        Bilgileri Temizle
      </button>
    </form>
  );
};

export default Form;
