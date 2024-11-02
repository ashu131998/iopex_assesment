
export function ThemeToggle(props) {
  const { toggle, setToggle } = props
  return (<button
    onClick={() => setToggle(!toggle)} style={{ height: "50px", border: "1px solid", borderRadius: "5px", backgroundColor: "blue", color: "white", padding: "10px" }}>
    Dark Mode
  </button>)
}