export function getUsername(username) {
  if (username && username.trim() !== "") {
    return username;
  }
  return "guest";
}
