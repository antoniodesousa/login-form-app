const axios: any = jest.genMockFromModule('axios');
axios.create.mockReturnThis();

export default axios;
