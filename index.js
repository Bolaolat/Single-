<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @keyframes colorChange {
            0% { background-color: black; color: white; }
            50% { background-color: white; color: black; }
            100% { background-color: black; color: white; }
        }
        .color-change {
            animation: colorChange 2s infinite;
        }
        .watermark {
            position: fixed;
            bottom: 10px;
            right: 10px;
            opacity: 0.5;
            font-size: 12px;
        }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen color-change">
    <div class="text-center">
        <p class="text-lg">SADCASM</p>
        <p class="text-2xl mt-4">2020: <span class="font-bold">Single</span></p>
        <p class="text-2xl mt-2">2021: <span class="font-bold">Single</span></p>
        <p class="text-2xl mt-2">2022: <span class="font-bold">Single</span></p>
        <p class="text-2xl mt-2">2023: <span class="font-bold">Single</span></p>
        <p class="text-2xl mt-2">2024: <span class="font-bold">Single</span></p>
        <p class="text-xl mt-4">The only things consistent in my life</p>
        <div class="mt-4">
            <span class="text-4xl">🤧</span>
        </div>
    </div>
    <div class="watermark">
        by BLUEDEMON
    </div>
</body>
</html>
