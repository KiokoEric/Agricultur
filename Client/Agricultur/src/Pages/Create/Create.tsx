import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from "react-cookie";

const stages = ['Seedling', 'Vegetative', 'Fruiting', 'Harvesting'];

const Create: React.FC = () => {
const [Crop, setCrop] = useState('');
const [cropData, setCropData] = useState({
    Seedling: { Pests: [], Diseases: [] },
    Vegetative: { Pests: [], Diseases: [] },
    Fruiting: { Pests: [], Diseases: [] },
    Harvesting: { Pests: [], Diseases: [] }
});

const [ Cookie,_ ] = useCookies(["auth_token"]);
const [currentStage, setCurrentStage] = useState('Seedling');
const [type, setType] = useState('Pests');
const [entry, setEntry] = useState({
    Name: '',
    Description:'',
    Signs: '',
    PreventiveMeasures: '',
    ImageUrl: ''
});

const handleAddEntry = () => {
    const updatedStage = { ...cropData[currentStage] };
    updatedStage[type] = [...updatedStage[type], entry];

    setCropData({
        ...cropData,
        [currentStage]: updatedStage
});

setEntry({
    Name: '',
    Description:'',
    Signs: '',
    PreventiveMeasures: '',
    ImageUrl: ''
});
};

const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:4000/Crops/AddCrop', {
            headers: { authorization: Cookie.auth_token },
            Crop,
            plantStages: cropData,
        });
            alert('Data saved successfully!');
    } catch (error) {
        console.error('Error saving data:', error);
        alert('Failed to save data.');
    }
};

return (
<div className="flex flex-col justify-center p-4">
    <h1 className="text-2xl font-bold mb-4 text-center">Data Entry</h1>

    <select value={Crop} onChange={(e: any) => setCrop(e.target.value)} className="px-5 py-2 border mb-5 rounded-sm w-full">
        <option value="">Select among the options below</option>
        <option value="Apple">Apple</option>
        <option value="Rice">Rice</option>
        <option value="Tea">Tea</option>
        <option value="Wheat">Wheat</option>
        <option value="Coffee">Coffee</option>
    </select>

    <div className="flex flex-col gap-5 justify-center mb-4">
        <select value={currentStage} onChange={(e: any) => setCurrentStage(e.target.value)} className="px-5 py-2 border rounded-sm">
            {stages.map(stage => <option key={stage}>{stage}</option>)}
        </select>

        <select value={type} onChange={(e: any) => setType(e.target.value)} className="px-5 py-2 border rounded-sm">
            <option value="Pests">Pest</option>
            <option value="Diseases">Disease</option>
        </select>
    </div>

    <div className="grid gap-2 mb-4">
    <input
        type="text"
        value={entry.Name}
        onChange={(e: any) => setEntry({ ...entry, Name: e.target.value })}
        placeholder="Name"
        className="px-5 py-2 border rounded-sm"
    />
    <textarea
        value={entry.Description}
        onChange={(e: any) => setEntry({ ...entry, Description: e.target.value })}
        placeholder="Description"
        className="px-5 py-2 border h-48 rounded-sm"
    />
    <textarea
        value={entry.Signs}
        onChange={(e: any) => setEntry({ ...entry, Signs: e.target.value })}
        placeholder="Signs & Symptoms"
        className="px-5 py-2 border h-48 rounded-sm"
    />
    <textarea
        value={entry.PreventiveMeasures}
        onChange={(e: any) => setEntry({ ...entry, PreventiveMeasures: e.target.value })}
        placeholder="Preventive Measures"
        className="px-5 py-2 border h-48 rounded-sm"
    />
    <input
        type="text"
        value={entry.ImageUrl}
        onChange={(e: any) => setEntry({ ...entry, ImageUrl: e.target.value })}
        placeholder="Image URL"
        className="px-5 py-2 border rounded-sm"
    />
    </div>

    <button onClick={handleAddEntry} className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded mb-4">
    Add {type.slice(0, -1)} to {currentStage}
    </button>

    <hr className="mb-4" />

    <button onClick={handleSubmit} className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded">
        Submit Data
    </button>
</div>
);
};

export default Create;
