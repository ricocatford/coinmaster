"use client";

import styles from "@/assets/styles/components/Market.module.css";
import { Cryptocurrencies } from "./Cryptocurrencies";
import { Card } from "@/components/card/Card";

export default function Market(): React.JSX.Element {
    return (
        <section className="container">
            <div className="container border-bottom">
                <h2 className="heading">Market Statistics</h2>
            </div>
            <div>
                <p className="paragraph">
                    Sponsored: Get all product features by signing up to our
                    Premium plan. <strong>Register now!</strong>
                </p>
            </div>
            <div className={styles.statistics}>
                <Card>
                    <p>Hello</p>
                    <p>Hello</p>
                </Card>
                <Card>
                    <p>Hello</p>
                    <p>Hello</p>
                </Card>
                <Card>
                    <p>Hello</p>
                    <p>Hello</p>
                </Card>
                <Card>
                    <p>Hello</p>
                    <p>Hello</p>
                </Card>
            </div>
            <Cryptocurrencies />
        </section>
    );
}
