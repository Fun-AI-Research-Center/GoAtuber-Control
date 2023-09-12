import { createContext, useContext, useState, ReactNode } from "react";

interface DataContextProps {
    children: ReactNode;
}
export interface Config {
    monitor: {
        bilibili: boolean;
        none: boolean;
    };
    filter: {
        dict: boolean;
        baidu: boolean;
        none: boolean;
    };
    llm: {
        openai: boolean;
        azure_openai: boolean;
        none: boolean;
    };
    voice: {
        azure: boolean;
        xfyun: boolean;
        none: boolean;
    };
    speech: {
        azure: boolean;
        none: boolean;
    };
    mood: {
        dict: boolean;
        none: boolean;
    };
    proxy: {
        use_proxy: boolean;
        proxy_url: string;
    };
    listen: {
        bilibili: {
            room_id: number;
        };
    };
    application: {
        openai: {
            api_key: string;
            model: string;
            temperature: number;
            topP: number;
            maxTokens: number;
            stop: string;
            presencePenalty: number;
            prompt: string;
            frequencyPenalty: number;
            memory_and_clean: {
                short_memory_token_limit: number;
                clean_all: boolean;
                clean_one: boolean;
            };
        };
        azure: {
            azure_openai: {
                api_key: string;
                end_point: string;
                deployment_id: string;
                api_version: string;
                model: string;
                temperature: number;
                top_p: number;
                max_tokens: number;
                stop: string;
                presence_penalty: number;
                frequency_penalty: number;
                prompt: string;
                memory_and_clean: {
                    short_memory_token_limit: number;
                    clean_all: boolean;
                    clean_one: boolean;
                };
                azure_embedding: {
                    deployment_id: string;
                    api_version: string;
                };
            };
            azure_tts: {
                api_key: string;
                end_point: string;
                speak: {
                    version: string;
                    xmlLang: string;
                    xmlnsMstts: string;
                    xmlns: string;
                };
                voice: {
                    name: string;
                    effect: string;
                    rate: string;
                    volume: string;
                };
                Authentication: string;
                Url: string;
            };
            azure_stt: {
                api_key: string;
                speech_region: string;
                language: string;
                format: string;
            };
        };
        xunfei: {
            xun_fei_tts: {
                api_key: string;
                api_secret: string;
                app_id: string;
                XunFeiVoice: {
                    aue: string;
                    sfl: number;
                    auf: string;
                    vcn: string;
                    speed: number;
                    volume: number;
                    pitch: number;
                    reg: string;
                    rdn: string;
                };
            };
        };
        baidu: {
            baidu_filter: {
                api_key: string;
                secret_key: string;
                access_token: string;
                expires_in: number;
            };
        };
        pinecone: {
            api_key: string;
            url: string;
        };
        dict: {
            filter_dict_name: string;
            mood_dict_name: string;
        };
    };
    tool: {
        memory: {
            use_memory: boolean;
            use_openai: boolean;
            use_azure: boolean;
            use_pinecone: boolean;
        };
    };
}



interface DataContextValue {
    data: Config | null;
    setData: (data: Config | null) => void;
}

const Data: Config = {
    monitor: {
        bilibili: false,
        none: false,
    },
    filter: {
        dict: false,
        baidu: false,
        none: false,
    },
    llm: {
        openai: false,
        azure_openai: false,
        none: false,
    },
    voice: {
        azure: false,
        xfyun: false,
        none: false,
    },
    speech: {
        azure: false,
        none: false,
    },
    mood: {
        dict: false,
        none: false,
    },
    proxy: {
        use_proxy: false,
        proxy_url: "",
    },
    listen: {
        bilibili: {
            room_id: 0,
        },
    },
    application: {
        openai: {
            api_key: "",
            model: "",
            temperature: 0,
            topP: 0,
            maxTokens: 0,
            stop: "",
            presencePenalty: 0,
            prompt: "",
            frequencyPenalty: 0,
            memory_and_clean: {
                short_memory_token_limit: 0,
                clean_all: false,
                clean_one: false,
            },
        },
        azure: {
            azure_openai: {
                api_key: "",
                end_point: "",
                deployment_id: "",
                api_version: "",
                model: "",
                temperature: 0,
                top_p: 0,
                max_tokens: 0,
                stop: "",
                presence_penalty: 0,
                frequency_penalty: 0,
                prompt: "",
                memory_and_clean: {
                    short_memory_token_limit: 0,
                    clean_all: false,
                    clean_one: false,
                },
                azure_embedding: {
                    deployment_id: "",
                    api_version: "",
                },
            },
            azure_tts: {
                api_key: "",
                end_point: "",
                speak: {
                    version: "",
                    xmlLang: "",
                    xmlnsMstts: "",
                    xmlns: "",
                },
                voice: {
                    name: "",
                    effect: "",
                    rate: "",
                    volume: "",
                },
                Authentication: "",
                Url: "",
            },
            azure_stt: {
                api_key: "",
                speech_region: "",
                language: "",
                format: "",
            },
        },
        xunfei: {
            xun_fei_tts: {
                api_key: "",
                api_secret: "",
                app_id: "",
                XunFeiVoice: {
                    aue: "",
                    sfl: 0,
                    auf: "",
                    vcn: "",
                    speed: 0,
                    volume: 0,
                    pitch: 0,
                    reg: "",
                    rdn: "",
                },
            },
        },
        baidu: {
            baidu_filter: {
                api_key: "",
                secret_key: "",
                access_token: "",
                expires_in: 0,
            },
        },
        pinecone: {
            api_key: "",
            url: "",
        },
        dict: {
            filter_dict_name: "",
            mood_dict_name: "",
        },
    },
    tool: {
        memory: {
            use_memory: false,
            use_openai: false,
            use_azure: false,
            use_pinecone: false,
        },
    },
};


const DataContext = createContext<DataContextValue | undefined>(undefined);

export function DataProvider({ children }: DataContextProps) {
    const [data, setData] = useState<Config | null>(Data);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData(): DataContextValue {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}
