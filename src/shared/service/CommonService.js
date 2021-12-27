import * as Constants from "../../shared/constant/constant";
import * as Config from "../../config/apiConfig";

import axios from "axios";

const CommonService = {

    // getTimeZoneIdByLatLong(latitude,longitude) {
    //     return axios.get('https://maps.googleapis.com/maps/api/timezone/json', {
    //         params: {
    //             location: [latitude,longitude].join(),
    //             timestamp: Math.floor(Date.now() / 1000),
    //             key: Constants.APIKEY
    //         }
    //     });
    // },
    
};

export default CommonService;
