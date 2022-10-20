import PropTypes from 'prop-types';
import {TransactionTable,TableTh,TableTd, Thead, TableTr} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return <TransactionTable>
        <Thead>
            <TableTr>
              <TableTh>Type</TableTh>
              <TableTh>Amount</TableTh>
              <TableTh>Currency</TableTh>
            </TableTr>
        </Thead>
            <tbody>
                {
                    items.map(({id,type, amount,currency}) => {
                    return (
                        <TableTr key={id}>
                            <TableTd>{type}</TableTd>
                            <TableTd>{amount}</TableTd>
                            <TableTd>{currency}</TableTd>
                        </TableTr>
                    )
                })
            }
            </tbody>
    </TransactionTable>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
  }),   )
}