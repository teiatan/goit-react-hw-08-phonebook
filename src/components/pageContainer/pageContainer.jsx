//контейнер, який вкладається у всі структурні
//частини сторінки: хедер, мейн і футер
//слугує лише для того, щоб задати положення контенту
//відносно сторінки і відносно медіаправил
import PropTypes from 'prop-types';
import { PageContainerDiv } from "./PageContainer.styled";

export function PageContainer({children}) {
    return(
        <PageContainerDiv>
            {children}
        </PageContainerDiv>
    );
};

PageContainer.propTypes = {
    children: PropTypes.node,
};