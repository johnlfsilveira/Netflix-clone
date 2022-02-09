const API_KEY ="d0d56e78486c25c64f4f999d99a2c634";

const requests = {
fetchEmAlta: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR&language=pt-BR`,
fetchFilmesAcao: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`,
fetchFilmesComedia: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
fetchFilmesTerror: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`,
fetchFilmesRomanticos: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
fetchDocumentarios: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-BR`,
}
export default requests;