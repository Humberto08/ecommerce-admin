interface DashboardPageProps {
    params: {storeId: string}
}

const DashboardPage: React.FC<DashboardPageProps> = async ({
    params
}) => {
    const store = await prismadb.store.findFirst({
        whrere: {
            id: params.storeId
        }
    })
    return (
        <div>
            Active Store: ${store?.name};
        </div>
    )
}

export default DashboardPage;