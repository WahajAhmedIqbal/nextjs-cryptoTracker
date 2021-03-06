import styles from './coins.module.css'
const Coins = ({ name,
    id, 
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange }) => {
    return (
        <div className={styles.coin_container}>
            <div className={styles.coin_row}>
                <div className={styles.coin}>
                    <img src={image} alt={name}
                    className={styles.coin_img} />
                    <h1 className={styles.coin_h1}>{name}</h1>
                    <p className={styles.coin_symbol}>{symbol}</p>
                </div>
                <div className={styles.coin_date}>
                    <p className={styles.coin_price}>${price}</p>
                    <p className={styles.coin_volume}>${volume}</p>
                    {priceChange < 0 ? (
                        <p className={styles.coin_percent, styles.red}>
                            {priceChange}%
                        </p>
                    ) : (
                        <p className={styles.coin_percent, styles.green}>
                            {priceChange}%
                        </p>
                    )}
                    <p className={styles.coin_marketcap}>
                        Mkt Cap: ${marketcap}
                     </p>
                </div>
            </div>
        </div>

    );
}

export default Coins;