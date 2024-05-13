import { useParams } from "react-router-dom";

const PDFAssetPage = () => {
    const { id }  = useParams();
    return <div style={{fontSize: '24px' }}>
        This is PDF {id} asset edit page
    </div>
}

export default PDFAssetPage;