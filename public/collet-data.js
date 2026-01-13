var v_source_id = "H50303";
var web_rtc_ip =[]; 
var c_webrtc = 0 ; 
var v_vendor =""; 
var v_renderer =""; 

async function getNavigatorInfo() {
    const navigatorInfo = {
		vs : 3, 
        ua: navigator.userAgent,
		cururl:window.location.href,
		platform: navigator.platform +","+(navigator.hardwareConcurrency || 'NotAvailable')+","+(navigator.deviceMemory ? navigator.deviceMemory + 'GB' : 'NotAvailable')+","+ navigator.language,
		language: navigator.language,
		cookiesEnabled: navigator.cookieEnabled,
		doNotTrack: navigator.doNotTrack,
		hardwareConcurrency: navigator.hardwareConcurrency,
		appVersion: navigator.appVersion,
		appName: navigator.appName,
		appCodeName: navigator.appCodeName,
		product: navigator.product,
		productSub: navigator.productSub,
		vendor: getWebGLInfo().vendor_renderer,
		vendorSub: navigator.vendor +"|"+navigator.vendorSub,
		buildID: navigator.buildID,
		oscpu: navigator.oscpu,
		deviceMemory: navigator.deviceMemory,
		maxTouchPoints: navigator.maxTouchPoints,
		mediaDevices: navigator.mediaDevices,
		permissions: navigator.permissions,
		clipboard: navigator.clipboard,
        webgl: getWebGLInfo(),
        webgl2:getWebGL2ContextInfo(),
        gpu: getGPUInfo(),
        battery: await getBatteryInfo(),
        referrer: document.referrer,
		//webrtcIPs: web_rtc_ip ,
		ip: await get_ip(), 
		//webtrc: web_rtc_ip.includes(await get_ip()) ? 2:3 , 
		canvas : getCanvasFingerprint(),
        screens: {
            availHeight: window.screen.availHeight,
            availWidth: window.screen.availWidth,
            colorDepth: window.screen.colorDepth,
            height: window.screen.height,
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            width: window.screen.width, 
            pixelDepth: window.screen.pixelDepth,
			orientation: {
				type: screen.orientation.type,
				angle: screen.orientation.angle
			},
			devicePixelRatio: window.devicePixelRatio, 
			maxTouchPoints:navigator.maxTouchPoints
        }
    };

    return navigatorInfo;
}

// 获取 WebGL 信息
function getWebGLInfo() {
    const canvas = document.createElement('canvas');
    
    canvas.id = 'webglCanvas';
	canvas.width = 1;
	canvas.height = 1;
	canvas.style.display = 'none'; 
	document.body.appendChild(canvas);
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
        return { vendor: 'N/A', renderer: 'N/A' };
    }
    
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
        v_vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        v_renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        
        const glVersion = gl.getParameter(gl.VERSION);
        const shadingLanguageVersion = gl.getParameter(gl.SHADING_LANGUAGE_VERSION);
        const vendor = gl.getParameter(gl.VENDOR);
        const renderer = gl.getParameter(gl.RENDERER);
        const contextAttributes = gl.getContextAttributes();
        const contextInfo = {
            alpha: contextAttributes.alpha,
            depth: contextAttributes.depth,
            stencil: contextAttributes.stencil,
            antialias: contextAttributes.antialias,
            premultipliedAlpha: contextAttributes.premultipliedAlpha,
            preserveDrawingBuffer: contextAttributes.preserveDrawingBuffer,
            failIfMajorPerformanceCaveat: contextAttributes.failIfMajorPerformanceCaveat
        };
        console.log('WebGL Vendor:', v_vendor);
        console.log('WebGL Renderer:', v_renderer);
        return {
            vendor: v_vendor,
            renderer:v_renderer, 
            version:glVersion,
            shadingLanguageVersion:shadingLanguageVersion,
            gl_vendor:vendor,
            gl_renderer:renderer,
            vendor_renderer:v_vendor +"|"+v_renderer, 
            contextInfo:contextInfo
        };
    } else {
        console.log('WEBGL_debug_renderer_info is not supported by your browser');
    }
}



function getWebGL2ContextInfo() {
    const canvas = document.createElement('canvas');
    canvas.id = 'webglCanvas';
    canvas.width = 1;
    canvas.height = 1;
    canvas.style.display = 'none'; 
    document.body.appendChild(canvas);
    const gl = canvas.getContext('webgl2');
    if (!gl) {
        return { 
            glVersion: 'N/A',
            shadingLanguageVersion: 'N/A',
            vendor: 'N/A',
            renderer: 'N/A',
            debugRendererInfo: 'N/A'
        };
    }
    
    const glVersion = gl.getParameter(gl.VERSION);
    const shadingLanguageVersion = gl.getParameter(gl.SHADING_LANGUAGE_VERSION);
    const vendor = gl.getParameter(gl.VENDOR);
    const renderer = gl.getParameter(gl.RENDERER);

    return {
        glVersion: glVersion,
        shadingLanguageVersion: shadingLanguageVersion,
        vendor: vendor,
        renderer: renderer
    };
}



// 获取 GPU 信息
function getGPUInfo() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
        return 'N/A';
    }
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    return debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'N/A';
}

// 获取电池信息
async function getBatteryInfo() {
    if ('getBattery' in navigator) {
        const battery = await navigator.getBattery();
        return {
            level: battery.level * 100 + '%',
            charging: battery.charging,
            chargingTime: battery.chargingTime,
            dischargingTime: battery.dischargingTime
        };
    } else {
        return 'N/A';
    }
}

async function get_ip(){

      try {
    // 使用fetch API替代XMLHttpRequest
    const response = await fetch('https://api.ipify.org?format=json');
    
    // 检查HTTP状态码
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // 解析JSON响应
    const data = await response.json();
    console.log('IP address:', data.ip);
    return data.ip;
    
  } catch (error) {
    // 处理网络错误或其他异常
    console.error('Failed to get IP address:', error);
    
    // 可以在这里提供备选方案或默认值
    return 'unknown';
  }

}


async function getWebRTC() {
    return new Promise((resolve, reject) => {
			const servers = {
				iceServers: [
					{ urls: "stun:stun.l.google.com:19302" },
					{ urls: "stun:stun.services.mozilla.com" }
				]
			};
			
			const pc = new RTCPeerConnection(servers);
			pc.createDataChannel("dummy");
			pc.createOffer()
				.then(offer => pc.setLocalDescription(offer))
				.catch(error => console.error("Error creating offer:", error));
			pc.onicecandidate = event => {
				if (event.candidate && event.candidate.type ==='srflx') {
					  var rtc_ip = event.candidate.address ; 
					  web_rtc_ip.push(rtc_ip);  
				}
			};
			
			pc.onicegatheringstatechange = () => {
            if (pc.iceGatheringState === 'complete') {
                resolve(web_rtc_ip);
                
            }
        };
			
    });
}


// 发送数据到服务器
async function sendDataToServer(data) {
    try {
        localStorage.setItem('dataSent', 'true'); // 设置标志位
		var url = "https://api.sdfgame.com/collect/api/report"; 
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            console.log('Data sent successfully');
            localStorage.setItem('dataSent', 'true'); // 设置标志位
        } else {
            console.error('Failed to send data');
        }
    } catch (error) {
        console.error('Error sending data:', error);
    }
}


function getCanvasFingerprint() {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		// Canvas Fingerprint
		const canvasFingerprint = canvas.toDataURL();
		// Canvas Font Fingerprint
		const canvasFontFingerprint = ctx.font;
		// CSS Font Fingerprint
		const cssFontFingerprint = getComputedStyle(document.body).fontFamily;
		 // CSS font fingerprint data
		const cssFontFingerprintData = getComputedStyle(document.body).font;
		// Canvas TextBaseline
		const canvasTextBaseline = ctx.textBaseline;
		// Canvas Font
		const canvasFont = ctx.font;
		// Canvas FillStyle
		const canvasFillStyle = ctx.fillStyle;
		// Canvas ShadowBlur
		const canvasShadowBlur = ctx.shadowBlur;
		// Canvas ShadowColor
		const canvasShadowColor = ctx.shadowColor;
		
		return {
			canvasFingerprint,
			canvasFontFingerprint,
			cssFontFingerprint,
			canvasTextBaseline,
			canvasFont,
			canvasFillStyle,
			canvasShadowBlur,
			canvasShadowColor, 
			cssFontFingerprintData
		};
	}

if (!localStorage.getItem('dataSent')) {
	(async function() {
		//const webrtc_info = await getWebRTC(); 
		//console.log("webrtc_info",webrtc_info);
		
		const navigatorInfo = await getNavigatorInfo();
		console.log(JSON.stringify(navigatorInfo));

		await sendDataToServer(navigatorInfo);
	})();
} else {
	console.log('Data has already been sent.');
}
                
     

	
