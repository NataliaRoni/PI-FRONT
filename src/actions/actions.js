import axios from "axios";

const deploy = "https://pi-back-production-4d3e.up.railway.app"
//* TRAER INFORMACIÓN DEL BACK:

export function getRecipes() {
  return async function (dispatch) {
    try {
      // Conexión entre el front y el back para traer las recetas:
      let json = await axios(`${deploy}/recipes`);
      return dispatch({ type: "GET_RECIPES", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getRecipesByName(name) {
  return async function (dispatch) {
    try {
      // Conexión entre el front y el back para traer las recetas por nombre:
      let json = await axios(`${deploy}/recipes?name=` + name);
      console.log(json.data);
      return dispatch({ type: "GET_RECIPES_BY_NAME", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getRecipesDetail(id) {
  return async function (dispatch) {
    try {
      // Conexión entre el front y el back para traer el detail de las recetas por id:
      let json = await axios(`${deploy}/recipes/` + id);
      return dispatch({ type: "GET_RECIPES_DETAIL", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postRecipes(payload) {
  return async function (dispatch) {
    try {
      // Conexión entre el front y el back para postear la nueva receta:
      let response = await axios.post(`${deploy}/recipes`, payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteRecipe(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`${deploy}/recipes/` + id);
      return dispatch({
        type: "DELETE_RECIPE",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDiets() {
  return async function (dispatch) {
    try {
      // Conexión entre el front y el back para traer las dietas:
      let json = await axios(`${deploy}/diets`);
      return dispatch({ type: "GET_DIETS", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

//* FILTROS Y ORDENAMIENTO:

export function filterByDiets(payload) {
  return {
    type: "FILTER_BY_DIETS",
    payload,
  };
}

export function filterMyRecipes(payload) {
  return {
    type: "FILTER_MY_RECIPES",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByHealthScore(payload) {
  return {
    type: "ORDER_BY_HEALTHSCORE",
    payload,
  };
}
