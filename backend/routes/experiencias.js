const { Router } = require("express");
// const Experiencias = require("../models/Experiencias");
// const { cloudinary } = require("../utils/cloudinary");
const router = Router();

// Get para mostrar todas las experiencias existentes
// Funciona Jest
// Esta en la lista
router.get("/", async (req, res) => {
  // const experiencias = await Experiencias.find().sort("-_id");
  // res.json(experiencias);
  console.log("res");
  // var fetch = require("node-fetch");

  // fetch("https://api-ssl.bitly.com/v4/shorten", {
  //   method: "POST",
  //   headers: {
  //     Authorization: "Bearer {TOKEN}",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     long_url: "https://dev.bitly.com",
  //     domain: "bit.ly",
  //     group_guid: "Ba1bc23dE4F",
  //   }),
  // });
});

// Get para mostrar los datos de una experiencia y consultar una experiencia
// Funciona Jest
// Esta en la lista
router.get("/:id", async (req, res) => {
  const id_experiencia = req.params;
  console.log("Este es el id de la experiencia", id_experiencia.id);
  // const experiencias = await Experiencias.find({ _id: id_experiencia.id });
  // res.json(experiencias);
});

// Get que obtiene todas las experiencias filtradas por sala
// Funciona Jest
// Esta en la lista
router.get("/:sala_interactiva", async (req, res) => {
  const sala_interactiva = req.params;
  console.log(
    "Este es el nombre de la sala interactiva",
    sala_interactiva.sala_interactiva
  );
  // const experiencias = await Experiencias.find({
  //   sala_interactiva: sala_interactiva.sala_interactiva,
  // });
  // res.json(experiencias);
});

// Get para mostrar todas las experiencias que existen de un usuario
// Funciona Jest
router.get("/all-experiencias-usuario/:id", async (req, res) => {
  const id_usuario = req.params;
  console.log("Este es el id del usuario", id_usuario.id);
  // const experiencias = await Experiencias.find({
  //   id_usuario: id_usuario.id,
  // });
  // res.json(experiencias);
});

// Post para crear una nueva experiencia
// Funciona Jest
// Esta en la lista
router.post("/", async (req, res) => {
  const {
    titulo,
    descripcion,
    sala_interactiva,
    imagen_relacionada,
    imagen,
    public_id,
    id_usuario,
  } = req.body;
  // const newExperiencia = new Experiencias({
  //   titulo,
  //   descripcion,
  //   sala_interactiva,
  //   imagen_relacionada,
  //   imagen,
  //   public_id,
  //   id_usuario,
  // });
  // newExperiencia.save();
  res.json({ message: "Se creo una nueva experiencia." });
});

// Actualizar la informacion de una experiencia
// Funciona
// Esta en la lista
router.put("/:id/:public_id_imagen", async (req, res) => {
  const {
    titulo,
    descripcion,
    sala_interactiva,
    imagen_relacionada,
    imagen,
    public_id,
    id_usuario,
  } = req.body;
  const _id = req.params.id;
  console.log("Id de la experiencia:", _id);

  // const public_id_imagen = req.params.public_id_imagen;

  // console.log(public_id_imagen, "esta es la public_id_image fuera del if");
  // console.log(public_id, "esta es la public_id fuera del if");

  // if (public_id != public_id_imagen) {
  //   console.log(public_id_imagen, "esta es la public_id_image dentro del if");
  //   console.log(public_id, "esta es la public_id dentro del if");
  //   cloudinary.uploader.destroy(public_id_imagen, function (error, resultado) {
  //     console.log(resultado, error, "Resultado de la eliminacion de la imagen");
  //   });
  // }

  // Experiencias.findByIdAndUpdate(
  //   _id,
  //   {
  //     $set: req.body,
  //   },
  //   (err, resultado) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     res.json({ message: "Se actualizo la informacion de la experiencia." });
  //   }
  // );
});

// Eliminar una experiencia
// Funciona
// Esta en la lista
router.delete("/:id/:public_id", async (req, res) => {
  const id = req.params.id;
  const public_id = req.params.public_id;
  cloudinary.uploader.destroy(public_id, function (error, resultado) {
    console.log(resultado, error, "Resultado de la eliminacion de la imagen");
  });
  const experiencias = await Experiencias.findByIdAndDelete(id);
  res.json({ message: "Experiencia eliminada." });
});

module.exports = router;
