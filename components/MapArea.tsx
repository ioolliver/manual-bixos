interface IMapAreaProps {
    coords: string, 
    name: string, 
    description: string,
    onAreaClick: (name : string, description : string) => void
}

function MapArea({ coords, name, description, onAreaClick } : IMapAreaProps) {
    function showAbout() {
        onAreaClick(name, description)
    }
    
    return (
        <area shape="rect" coords={coords} onClick={showAbout} />
    )
}

export default MapArea