import { findUser } from "./UserModel.js";

let bands = [];

// CARREGAR BANDAS DA LOCALSTORAGE
export function init() {
  if(localStorage.bands) {
    const tempBands = JSON.parse(localStorage.bands);
    for(let band of tempBands) {
      bands.push(new Band(band.name, band.genre, band.cover, band.desc, band.music, band.userId));
    }
  } else {
    bands = [];
  }
}

// ADICIONAR BANDA
export function add(name, genre, cover, desc, music, userId) {
  if (bands.some((band) => band.name === name)) {
    throw Error(`Band with name "${name}" already exists!`);
  } else {
    bands.push(new Band(name, genre, cover, desc, music, userId));
    localStorage.setItem("bands", JSON.stringify(bands));
  }
}

// REMOVER BANDA
export function removeBand(name) {
  bands = bands.filter((band) => band.name !== name);
  localStorage.setItem("bands", JSON.stringify(bands));
}

// DEFINIR A BANDA ATUAL (AQUELA QUE SERÁ VISTA NO DETALHE DA BANDA)
export function setCurrentBand(name) {
  localStorage.setItem("band", name);
}

// OBTER A BANDA ATUAL (TODO O OBJETO)
export function getCurrentBand() {
  return bands.find((band) => band.name === localStorage.getItem("band"));
}

// ORDENAR BANDAS
export function sortBands() {
  bands.sort((a, b) => a.name.localeCompare(b.name));
  //localStorage.setItem("bands", JSON.stringify(bands));
}

// OBTER BANDAS (COM SUPORTE A FILTROS E ORDENAÇÕES)
export function getBands(filterName = "", filterGenre = "", isSorted = false) {
  let filteredBands = bands.filter(
    (band) =>
      (band.name.toLowerCase().includes(filterName.toLowerCase()) ||
        filterName === "") &&
      (band.genre == filterGenre || filterGenre === "")
  );

  filteredBands = isSorted
    ? filteredBands.sort((a, b) => a.name.localeCompare(b.name))
    : filteredBands;

  return filteredBands;
}

/**
 * Classe que modela uma banda de música
 */
class Band {
  name = "";
  genre = "";
  cover = "";
  desc = "";
  music = "";
  userId = "";	

  constructor(name, genre, cover, desc, music, userId) {
    this.name = name;
    this.genre = genre;
    this.cover = cover;
    this.desc = desc;
    this.music = music;
    this.userId = userId;
  }

  get user() {
    return findUser(this.userId);
  }
}
