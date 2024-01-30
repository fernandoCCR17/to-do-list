import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Index, {loader as notasLoader} from "../pages/Index";
import NuevaNota, { action as actionNuevaNota } from "../pages/NuevaNota";
import EditarNota, { loader as loaderEditarNota, action as actionEditarNota} from "../pages/EditarNota";
import ErrorPage from "../pages/ErrorPage";
import { action as actionFormularioConfirmar } from "../components/FormularioConfirmar";
import { action as actionFormularioBusqueda } from "../components/FormularioBusqueda";
import { FiltrosProvider } from "../context/FiltrosProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: (<FiltrosProvider><Index /></FiltrosProvider>),
                loader: notasLoader,
                action: actionFormularioBusqueda,
                errorElement: <ErrorPage />
            },
            {
                path: "/notas/nuevo",
                element: <NuevaNota />,
                action: actionNuevaNota,
                errorElement: <ErrorPage />
            },
            {
                path: "/notas/:notaId/editar",
                element: <EditarNota />,
                loader: loaderEditarNota,
                action: actionEditarNota,
                errorElement: <ErrorPage />
            },{
                path: "/notas/:notaId/eliminar",
                action: actionFormularioConfirmar
            }
        ]
    },
    {
        path: "/auth",
        element: <h1>Inicio</h1>
    }
])

export default router;