import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
  CHECK_PLACE,
  DELETE_SELECTED
} from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:

      let uris = [
        "https://c1.staticflickr.com/7/6165/6264388225_b4089b4d27_b.jpg",
        "https://c1.staticflickr.com/8/7755/17213074490_43f26992fd_c.jpg",
        "https://c1.staticflickr.com/9/8802/17163991159_9875f18b96_n.jpg",
        "https://c1.staticflickr.com/1/812/26624252597_f4938bfaa4_n.jpg",
        "https://c1.staticflickr.com/1/594/32274330905_aaac0a013a_n.jpg",
        "https://c1.staticflickr.com/9/8482/8233219480_aa406db295_n.jpg",
        "https://c1.staticflickr.com/2/1546/24910906122_59bf603a68_n.jpg",
        "https://c1.staticflickr.com/9/8164/29736158851_3878fdfa24_n.jpg",
        "https://c1.staticflickr.com/9/8646/16505662060_0873e13d16_n.jpg",
        "https://c1.staticflickr.com/4/3674/14269823784_bcb42756e1_n.jpg",
        "https://c1.staticflickr.com/8/7062/6834658934_a89a690c39_n.jpg"
      ];
      let index = parseInt(Math.random() * 10);
      let uri = uris[index];
    
      return {
        ...state,
        places: state.places.concat({
          key: "" + Math.random(),
          name: action.placeName,
          image: { uri: uri },
          checked : false
        })
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      };

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };

    case CHECK_PLACE:
      let place = state.places.find(place => {
        return place.key === action.placeKey;
      });
      place.checked = !place.checked;
      return state;

    case DELETE_SELECTED:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.checked === false;
        })
      };

    default:
      return state;
  }
};

export default reducer;
