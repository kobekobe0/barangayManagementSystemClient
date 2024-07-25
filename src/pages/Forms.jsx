import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import API_URL from "../constants/api";
import censuspic from "../assets/census.jpg";

const Forms = () => {
    return (
        <div className="flex p-8 flex-col ml-64 w-full">
            <ul>
                <li>stats, number of forms created, number of forms created this month</li>
                <li>tanong if resident or hindi</li>
                <li>if resident, redirect to residents page</li>
                <li>if not, show form with nonResident fields and formtype selection</li>
                <li>also, add webcam view and send the picture to backend, save the image and then append it to the form</li>
                <li>modify form schema, add picture field, query this if nonResident is truthful</li>
            </ul>
        </div>
    );
    }

export default Forms;