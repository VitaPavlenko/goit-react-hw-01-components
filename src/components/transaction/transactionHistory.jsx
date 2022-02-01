import PropTypes from 'prop-types';
import TransactionItem from '../transaction/transactionItem';
import s from './transactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s['transaction-history']}>
      <thead>
        <tr className={s['transaction']}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s['tran']}>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
