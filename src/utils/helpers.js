const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
const capitalize = (str) => {
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return str2;
};
export { getToken, capitalize };
