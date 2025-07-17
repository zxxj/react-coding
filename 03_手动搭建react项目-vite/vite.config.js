import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	plugin: [react()],
	server: {
		port: 3000
	}
})