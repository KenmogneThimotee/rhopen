import http from "../http-common";

class ProductDataService {
  getAll() {
    return http.get("/api/products");
  }

  get(id) {
    return http.get(`/api/products/${id}`);
  }

  create(data) {
    return http.post("/api/products/", data);
  }

  update(id, data) {
    return http.put(`/api/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/api/products/${id}`);
  }

}

export default new ProductDataService();
