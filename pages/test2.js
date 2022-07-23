import ScrollToTop from "react-scroll-to-top";

const Test2 = () => {
    return (
        <>
            <ScrollToTop smooth component={"HEllo"} />
            <h1>Hello!</h1>
            <h2>Scroll down for the button to appear</h2>
            <p style={{ marginTop: "150vh" }}>bottom</p>
        </>
    );
};

export default Test2;
