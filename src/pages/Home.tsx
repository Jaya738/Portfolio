import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Banner } from "../components/Banner";
import { Menu } from "../components/Menu";
import { Sidebar } from "../components/Sidebar";

export interface HomeProps {
    profileName: string;
}

export const Home: FC<HomeProps> = ({ profileName }) => 
{
    return (
        <Container className="home-page" fluid>
            <Row>
                <Col lg="3">
                    <Sidebar />
                </Col>
                <Col lg="8">
                    <Banner />
                </Col>
                <Col lg="1">
                    <Menu />
                </Col>
            </Row>
        </Container>
    );
}