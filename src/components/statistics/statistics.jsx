import PropTypes from 'prop-types';
import s from './statistics.module.css';
function Statistics({ title, stats }) {
  return (
    <section className={s['statistics']}>
      {title && <h2 className={s['title']}>{title}</h2>}
      <ul className={s['stat-list']}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s['item']}
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215,
              ).toString(16)}`,
            }}
          >
            <span className={s['label']}>{stat.label}</span>
            <span className={s['percentage']}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
  title: PropTypes.string,
};

export default Statistics;
