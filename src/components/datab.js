import axios from "axios";

export const datab = {
  componentDidMount() {
    axios
      .get(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
      .then((res) => {
        const marcas = res.data;
        this.setState({ marcas });
      });
  },
};
