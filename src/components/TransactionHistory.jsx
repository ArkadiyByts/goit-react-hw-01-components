import PropTypes from 'prop-types';
import css from '../styles/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    
    return (
        <div className={css.transactionContainer}>
            <table className={css.transaction}>
                <thead className={css.head}>
                    <tr className={css.row}>
                        <th className={css.header}>Type</th>
                        <th className={css.header}>Amount</th>
                        <th className={css.header}>Currency</th>
                    </tr>
                </thead>
                <tbody className={css.body}>
                    {items.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={css.row}>
                        
                        <td className={css.cell}>{type}</td>
                        <td className={css.cell}>{amount}</td>
                        <td className={css.cell}>{currency}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

    
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default TransactionHistory;