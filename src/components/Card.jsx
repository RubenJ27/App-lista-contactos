
export const Card = ({image, Name, email, phone}) => {
  return (
    <div className="bg-white bg-gradient-to-b from-cyan-500 to-blue-500 py-8 px-10 rounded-3xl shadow-xl w-96 mt-16 mb-16 border-white border-4 text-center">
      <img className="w-36 -mt-16 shadow-xl rounded-full mb-4 border-white border-4 mx-auto" src={image} alt="imagen contacto" />

      <h1 className="text-2xl font-bold text-white mb-2">🙍 {Name}</h1>
      <h2 className="text-lg mb-2 text-white">✉️ {email}</h2>
      <h2 className="text-lg font-bold text-white">📱 {phone}</h2>
    </div>
  )
}
