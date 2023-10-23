let count:number = 0

function Profile() {
  count++
  return (
    <div className="foto-individual">
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" draggable="false"/>
      <h3>Foto N°{count}</h3>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="section-fotos">
      <h1>Fotos</h1>
      <div className="fotos">
        <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
      </div>
    </section>
  );
}