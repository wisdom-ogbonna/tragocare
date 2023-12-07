export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            src="https://iili.io/JzZPTuf.png"
            alt="Your Logo Alt Text"
            style={{
                maxWidth: '150px',
                width: '100%',
                height: 'auto',
                border: '2px solid white', // Replace with the desired border color
                borderRadius: '8px', // Optional: add border radius for rounded corners

            }}
        />
    );
}
