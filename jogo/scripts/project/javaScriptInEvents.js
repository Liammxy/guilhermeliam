

const scriptsInEvents = {

	async FolhaDeEventos1_Event18_Act3(runtime, localVars)
	{
		runtime.globalVars.ContainersPintados++;
		if (runtime.globalVars.ContainersPintados >= 3) {
			runtime.goToLayout("TelaVitoria");
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
