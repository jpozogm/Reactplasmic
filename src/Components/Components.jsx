import { PlasmicComponent } from "@plasmicapp/loader-react"

function Componentes() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <PlasmicComponent component="MyComponent" />
        </div>
    )
}

export default Componentes